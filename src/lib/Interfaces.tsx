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
    moveTo: AnyAnyFunction;
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
    copy: AnyFunction;
    random: VectorFunction;
}

// Types
type CoordinateVectorFunction = (x: number, y: number) => IVector;

type VectorVectorFunction = (v: IVector) => IVector;

type NumberVectorFunction = (s: number) => IVector;

type NumberFunction = () => number;

type VectorFunction = () => IVector;

type VectorNumberFunction = (v: IVector) => number;

type VectorNumberVectorFunction = (v: IVector, amt: number) => IVector;

type AnyFunction = () => any;

type AnyAnyFunction = (a: any) => any;

type VoidFunction = () => void;

type VectorVoidFunction = (v: IVector) => void;

type CreatureArrayVectorFunction = (c: ICreature[]) => IVector;