import { Creature } from "./creature";

export interface IWorld {
    creatures: Creature[];
    width: number;
    height: number;
    context: CanvasRenderingContext2D | null;
}