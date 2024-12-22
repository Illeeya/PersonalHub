export type ListElementType = {
    uuid: string;
    text: string;
    children: ListElementType[];
    deleteTask: (value: string) => void;
};
