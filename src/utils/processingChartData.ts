import { LabelType, LabelsType, ObjectResultsType } from "../type/typeHooks/typesUseCurrencePages"
import { compileUnix } from "./dateAndTime";
import { findAverageNumber } from "./findAverageNumber";

export const processingChartData = (labels: LabelsType): ObjectResultsType =>{
        const newLabels: LabelsType = labels.slice();
        const objectResults: ObjectResultsType = {
            averageIndex: [],
            time: []
        }

        objectResults.averageIndex.push(...newLabels.map( (item: LabelType) => findAverageNumber(item.low, item.high)));
        objectResults.time.push(...newLabels.map( (item: LabelType) => compileUnix(item.time)).map( (date: string) => date.slice(0, 10)));

        return objectResults
}