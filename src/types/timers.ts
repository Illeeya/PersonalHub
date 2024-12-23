export type TimerData = {
    id: string;
    name: string;
    time: number;
    deleteHandler: (id: string) => void;
};
