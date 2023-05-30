import { atom, selector } from "recoil";// atom은 따로 빼서 src위 global 만들어서 관리하기 좋음

export const CntAtoms = atom({
    key : 'CntAtoms', 
    default : 0,  //전역변수 이므로 atom 변수 안에서 유일해야함
}); // atom 자체를 호출해야함. 


export const CntAtomsTwice = selector({
    key : 'CntAtomsTwice', 
    get : ({get}) => {
        return get(CntAtoms) * 2 ;
    },  //selectors는 default가 아닌 get으로 써야함. 항상 get콜백함수 받음. 
}); // atom 자체를 호출해야함. atom이 자동으로 2배로 바꿔서 가지고옴. 
