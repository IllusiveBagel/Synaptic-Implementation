import { Architect } from "synaptic";
import { Creature } from "./Creature";

// Interfaces
export interface IWorld {
    creatures: Creature[];
    width: number;
    height: number;
    context: CanvasRenderingContext2D | null;
}

export interface ICreature {
    network: Architect.Perceptron;
    world: IWorld;
    mass: number;
    maxspeed: number;
    maxforce: number;
    lookRange: number;
    length: number;
    base: number;
    HALF_PI: number;
    TWO_PI: number;
    location: IVector;
    velocity: IVector;
    acceleration: IVector;
    color: string;
    moveTo: NumberArrayFunction;
    draw: VoidFunction;
    update: VoidFunction;
    applyForce: VectorVoidFunction;
    boundaries: VoidFunction;
    seek: VectorVectorFunction;
    separate: CreatureArrayVectorFunction;
    align: CreatureArrayVectorFunction;
    cohesion: CreatureArrayVectorFunction;
}

export interface IVector {
    x: number;
    y: number;
    set: CoordinateVectorFunction;
    add: VectorVectorFunction;
    sub: VectorVectorFunction;
    mul: NumberVectorFunction;
    div: NumberVectorFunction;
    mag: NumberFunction;
    normalize: VectorFunction;
    angle: NumberFunction;
    setMag: NumberVectorFunction;
    setAngle: NumberVectorFunction;
    rotate: NumberVectorFunction;
    limit: NumberVectorFunction;
    angleBetween: VectorNumberFunction;
    dot: VectorNumberFunction;
    lerp: VectorNumberVectorFunction;
    dist: VectorNumberFunction;
    copy: VectorFunction;
    random: VectorFunction;
}

// Types
type CoordinateVectorFunction = (x: number, y: number) => IVector;

type VectorVectorFunction = (v: IVector) => IVector;

type NumberVectorFunction = (n: number) => IVector;

type NumberFunction = () => number;

type VectorFunction = () => IVector;

type VectorNumberFunction = (v: IVector) => number;

type VectorNumberVectorFunction = (v: IVector, n: number) => IVector;

type NumberArrayFunction = (n: number[]) => void;

type VoidFunction = () => void;

type VectorVoidFunction = (v: IVector) => void;

type CreatureArrayVectorFunction = (c: ICreature[]) => IVector;