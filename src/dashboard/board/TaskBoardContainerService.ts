import {TaskProps} from "../../layout/dialog/CreateNewTaskDialogService";

export interface TaskBoardColumn {
    id: number;
    title: string;
    description: string;
    cards: TaskProps[];
}

export interface TaskBoard {
    columns: TaskBoardColumn[]
}

export const INITIAL_BOARD: TaskBoard = {
    columns: [
        {
            id: 1,
            title: "taskBoard.column.title.TODO",
            description: "taskBoard.column.description.TODO",
            cards: [],
        },
        {
            id: 2,
            title: "taskBoard.column.title.IN_PROGRESS",
            description: "taskBoard.column.description.INPROGRESS",
            cards: [],
        },
        {
            id: 3,
            title: "taskBoard.column.name.DONE",
            description: "taskBoard.column.description.DONE",
            cards: [],
        },
    ],
};
