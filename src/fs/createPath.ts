import path from 'path';

export default function createPath(paths: string[]) {
	return path.join(process.cwd(), ...paths);
}
