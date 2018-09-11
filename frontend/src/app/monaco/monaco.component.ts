import { Component, OnInit, ViewChild } from '@angular/core';
import { MonacoFile, MonacoEditorDirective } from 'ngx-monaco';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {
  theme = 'vs-dark';
  files: MonacoFile[] = [
    {
      uri: './sample.edi',
      content: `'use strict';
console.log('Hello World');`
    }
  ];

  file = this.files[0];

  fileChange = new Subject<MonacoFile>();

  @ViewChild(MonacoEditorDirective)
  editor: MonacoEditorDirective;

  open(file: any) {
    this.file = file;
  }

  onReady(editor: monaco.editor.IEditor) {
    console.log(editor);
    // Bootstrap(editor);
  }

  ngOnInit() {
    this.fileChange
      .pipe(
        debounceTime(1000),
        distinctUntilChanged((a, b) => a.content === b.content)
      )
      .subscribe(file => {
        console.log(file);
      });
  }
}
