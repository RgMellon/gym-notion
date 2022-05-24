import {  AddSheetPage } from "../../../../presentations/page/addSheet";
import { makeRemoteAddSheet } from "../../usecases/add-sheet";


export function makeAddSheet() {
    return <AddSheetPage 
        addSheet={makeRemoteAddSheet()}
    />
}