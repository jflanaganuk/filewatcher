import { watch } from 'chokidar';
import { debounceTime, scan } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const watcher = watch('./node_modules');
const files$ = fromEvent(watcher, 'change');

files$.pipe(
    scan((totalFiles: [string], file: string) => [...totalFiles, file], []),
    debounceTime(200),
).subscribe((val: [string]) => {
    console.log(Date());
    console.log(val)
});
