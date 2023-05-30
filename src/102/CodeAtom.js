import { atom } from "recoil";

export const CodeAtom = atom({
    key : 'CodeAtom', 
    default : '',  //전역변수 이므로 atom 변수 안에서 유일해야함
}); // atom 자체를 호출해야함. 