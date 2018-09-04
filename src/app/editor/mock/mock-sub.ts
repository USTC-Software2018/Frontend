import { EditorSubroutineHeader } from '../headers/steps';

export let mockSub: EditorSubroutineHeader[] = new Array<EditorSubroutineHeader>();

const mockSub_1 = new EditorSubroutineHeader();
mockSub_1.id = '-1';
mockSub_1.desc = 'demo subroutine';
mockSub_1.steps = ['1'];

mockSub.push(mockSub_1);