import {  AddSheetPage } from "../../../../presentations/page/addSheet";
import { makeRemoteAddSheet } from "../../usecases/add-sheet";
import { makeRemoteListSheet } from "../../usecases/list-shet";



export function makeAddSheet() {
    return <AddSheetPage 
        loadSheet={makeRemoteListSheet()}
        addSheet={makeRemoteAddSheet()}
    />
}