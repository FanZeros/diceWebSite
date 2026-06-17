import * as THREE from 'three';

// ===== BeveledDiceGeometry (ported from game) =====
// Custom dice mesh with raised border frame + recessed face center

const BORDER_FLAT = 0.035;
const BEVEL_END = 0.10;
const BORDER_RAISE = 0.006;
const FACE_RECESS = 0.008;
const CUBE_ROUND = 0.12;

const UV_STOPS = [
    0, 0.010, 0.020, 0.035,
    0.050, 0.065, 0.080, 0.100,
    0.350, 0.500, 0.650,
    0.900, 0.920, 0.935, 0.950,
    0.965, 0.980, 0.990, 1.000,
];

const FACES = [
    { nx: 1, ny: 0, nz: 0, rx: 0, ry: 0, rz: -1, ux: 0, uy: 1, uz: 0 },
    { nx: -1, ny: 0, nz: 0, rx: 0, ry: 0, rz: 1, ux: 0, uy: 1, uz: 0 },
    { nx: 0, ny: 1, nz: 0, rx: 1, ry: 0, rz: 0, ux: 0, uy: 0, uz: -1 },
    { nx: 0, ny: -1, nz: 0, rx: 1, ry: 0, rz: 0, ux: 0, uy: 0, uz: 1 },
    { nx: 0, ny: 0, nz: 1, rx: 1, ry: 0, rz: 0, ux: 0, uy: 1, uz: 0 },
    { nx: 0, ny: 0, nz: -1, rx: -1, ry: 0, rz: 0, ux: 0, uy: 1, uz: 0 },
];

function sstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

function getHeight(u, v) {
    const d = Math.min(u, 1 - u, v, 1 - v);
    if (d <= BORDER_FLAT) return BORDER_RAISE;
    if (d <= BEVEL_END) {
        const t = sstep(BORDER_FLAT, BEVEL_END, d);
        return BORDER_RAISE + (-FACE_RECESS - BORDER_RAISE) * t;
    }
    return -FACE_RECESS;
}

export class BeveledDiceGeometry extends THREE.BufferGeometry {
    constructor(scale = 1.0) {
        super();
        const positions = [];
        const normals = [];
        const uvs = [];
        const indices = [];
        const gridSize = UV_STOPS.length;
        const inner = 0.5 - CUBE_ROUND;
        let vertexOffset = 0;

        for (let fi = 0; fi < 6; fi++) {
            const f = FACES[fi];
            const faceStart = vertexOffset;

            for (let vi = 0; vi < gridSize; vi++) {
                const v = UV_STOPS[vi];
                for (let ui = 0; ui < gridSize; ui++) {
                    const u = UV_STOPS[ui];
                    const h = getHeight(u, v);

                    const bx = f.nx * 0.5 + f.rx * (u - 0.5) + f.ux * (v - 0.5);
                    const by = f.ny * 0.5 + f.ry * (u - 0.5) + f.uy * (v - 0.5);
                    const bz = f.nz * 0.5 + f.rz * (u - 0.5) + f.uz * (v - 0.5);

                    const cx = Math.max(-inner, Math.min(inner, bx));
                    const cy = Math.max(-inner, Math.min(inner, by));
                    const cz = Math.max(-inner, Math.min(inner, bz));
                    let dx = bx - cx, dy = by - cy, dz = bz - cz;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    let rnx, rny, rnz, px, py, pz;
                    if (dist > 1e-6) {
                        dx /= dist; dy /= dist; dz /= dist;
                        px = cx + dx * CUBE_ROUND;
                        py = cy + dy * CUBE_ROUND;
                        pz = cz + dz * CUBE_ROUND;
                        rnx = dx; rny = dy; rnz = dz;
                    } else {
                        px = bx; py = by; pz = bz;
                        rnx = f.nx; rny = f.ny; rnz = f.nz;
                    }

                    px += rnx * h;
                    py += rny * h;
                    pz += rnz * h;

                    const eps = 0.003;
                    const dhdu = (getHeight(Math.min(u + eps, 1), v) - getHeight(Math.max(u - eps, 0), v)) / (Math.min(u + eps, 1) - Math.max(u - eps, 0));
                    const dhdv = (getHeight(u, Math.min(v + eps, 1)) - getHeight(u, Math.max(v - eps, 0))) / (Math.min(v + eps, 1) - Math.max(v - eps, 0));

                    let snx = rnx - f.rx * dhdu - f.ux * dhdv;
                    let sny = rny - f.ry * dhdu - f.uy * dhdv;
                    let snz = rnz - f.rz * dhdu - f.uz * dhdv;
                    const sLen = Math.sqrt(snx * snx + sny * sny + snz * snz);
                    snx /= sLen; sny /= sLen; snz /= sLen;

                    positions.push(px * scale, py * scale, pz * scale);
                    normals.push(snx, sny, snz);
                    uvs.push(u, v);
                    vertexOffset++;
                }
            }

            const idxStart = indices.length;
            for (let vi = 0; vi < gridSize - 1; vi++) {
                for (let ui = 0; ui < gridSize - 1; ui++) {
                    const a = faceStart + vi * gridSize + ui;
                    const b = faceStart + vi * gridSize + (ui + 1);
                    const c = faceStart + (vi + 1) * gridSize + (ui + 1);
                    const d = faceStart + (vi + 1) * gridSize + ui;
                    indices.push(d, a, c);
                    indices.push(a, b, c);
                }
            }
            this.addGroup(idxStart, indices.length - idxStart, fi);
        }

        this.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        this.setIndex(indices);
    }
}
