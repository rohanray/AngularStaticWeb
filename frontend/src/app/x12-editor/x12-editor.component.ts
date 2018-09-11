import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { Doc, TextMarker } from 'codemirror';

const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript': `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/typectrl/ngx-codemirror"
};
const hello: string = 'world';`,
  'text/x-q': `ISA*00*          *00*          *ZZ*COBA           *ZZ*231628836      *180113*0302*|*00501*180120275*0*P*:~
GS*HC*COBA*231628836*20180113*030252*100005893*X*005010X223A2~
ST*837*000000004*005010X223A2~
BHT*0019*00*13001    180110017550PO*20180112*2140*CH~
NM1*41*2*NATIONAL GOVERNMENT SERVICES #13001*****46*13001~
PER*IC*BCRC EDI DEPARTMENT*TE*6464586740~
NM1*40*2*COLONIAL PENN LIFE INSURANCE CO*****46*30326~
HL*1**20*1~
PRV*BI*PXC*282N00000X~
NM1*85*2*CAYUGA MEDICAL CENTER AT ITHACA*****XX*1962422733~
N3*101 DATES DR~
N4*ITHACA*NY*148501383~
REF*EI*222325405~
HL*2*1*22*0~
SBR*U*18*******CI~
NM1*IL*1*JACKSON*RICHARD****MI*216718410~
N3*447 VANBUSKIRK GULF RD~
N4*NEWFIELD*NY*148670000~
DMG*D8*19510723*M~
NM1*PR*2*COLONIAL PENN LIFE INSURANCE CO*****PI*30326~
N3*11825 N PENNSYLVANIA~
N4*CARMEL*IN*46032~
CLM*AAP49087*758***13:A:1**A*Y*Y~
DTP*434*RD8*20171218-20171218~
CL1*3*1*01~
REF*EA*M000932792~
HI*ABK:N50819~
HI*ABF:N5089*ABF:M5416*ABF:R229~
HI*BH:11:D8:20171218~
HI*BE:24:::1200~
NM1*71*1*KNOLLGARRETT*ANDREA****XX*1518365659~
SBR*P*18**MEDICARE*****MA~
AMT*D*88.22~
OI***Y***Y~
MOA*.35**MA01*MA18~
NM1*IL*1*JACKSON*RICHARD****MI*553862164A~
N3*447 VANBUSKIRK GULF RD~
N4*NEWFIELD*NY*148670000~
NM1*PR*2*MEDICARE*****PI*13001~
N3*8115 KNUE ROAD~
N4*INDIANAPOLIS*IN*46250~
REF*F8*21736101477504NYA~
LX*1~
SV2*0402*HC:76536*379*UN*1~
SVD*13001*88.22*HC:76536*0402*1~
CAS*CO*45*266.47**253*1.8~
CAS*PR*2*22.51~
DTP*573*D8*20180112~
LX*2~
SV2*0402*HC:76870*379*UN*1~
SVD*13001*0*HC:76870*0402*1~
CAS*CO*97*379~
DTP*573*D8*20180112~
SE*52*000000004~
GE*1*100005893~
IEA*1*180120275~`
};

@Component({
  selector: 'app-x12-editor',
  templateUrl: './x12-editor.component.html',
  styleUrls: ['./x12-editor.component.css']
})
export class X12EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor')
  editor: CodemirrorComponent;

  readOnly = false;
  mode = 'text/x-q';
  options: any = {
    lineNumbers: true,
    mode: this.mode,
    theme: 'xq-light',
    viewportMargin: Infinity
  };
  defaults = defaults;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.doc.addLineClass(3, 'gutter', 'gutter-error'); // THIS IS WORKING
  }

  cursorMoved() {
    const cursorPos = this.doc.getCursor();
    this.doc.addLineClass(3, 'gutter', 'gutter-error'); // THIS IS WORKING
    this.doc.addLineClass(6, 'gutter', 'gutter-error'); // THIS IS WORKING
    this.doc.addLineClass(10, 'gutter', 'gutter-error'); // THIS IS WORKING

    // setTimeout(() => {
    //   this.doc.removeLineClass(3, 'gutter', 'gutter-error'); // THIS IS WORKING
    // }, 3000);
    // console.log('1');
    // console.log(cursorPos);
    // console.log('2');
    // // console.log(this.doc.lineInfo(3));
    // console.log('3');
    // // console.log(this.doc.lineSeparator());
    // console.log('4');
    // this.doc.addLineClass(3, 'gutter', 'CodeMirror-gutter-background');
    // this.editor.codeMirror.addLineClass(
    //   3,
    //   'background',
    //   'CodeMirror-gutter-background'
    // );
    // this.doc.getEditor().addLineClass(3, 'wrap', 'test-codeMirror-highlight');

    // const cursorPos = this.editor.codeMirror.getDoc().getCursor();
    // this.editor.codeMirror.addLineClass(3, 'wrap', 'test-codeMirror-highlight');
    // .getDoc()
    // .getEditor()
    // .addLineClass(3, 'wrap', 'test-codeMirror-highlight');
  }

  handleChange($event) {
    // console.log('ngModelChange', $event);
  }

  get doc() {
    return (this.editor.codeMirror as any) as Doc;
  }
}
