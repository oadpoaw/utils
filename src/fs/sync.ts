import fs from 'fs';
import createPath from './createPath.js';

export function writeFile(
	paths: string[],
	buffer: string | NodeJS.ArrayBufferView,
) {
	fs.writeFileSync(createPath(paths), buffer);
}

export function readFile(paths: string[]) {
	return fs.readFileSync(createPath(paths));
}

export function existsFile(paths: string[]) {
	try {
		return stat(paths).isFile();
	} catch (err) {
		return false;
	}
}

export function stat(paths: string[]) {
	return fs.statSync(createPath(paths));
}

export function readdir(paths: string[]) {
	return fs.readdirSync(createPath(paths));
}

export function mkdir(paths: string[]) {
	fs.mkdirSync(createPath(paths));
}

export function existsDirectory(paths: string[]) {
	try {
		return stat(paths).isDirectory();
	} catch (err) {
		return false;
	}
}
