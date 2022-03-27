import { Architect } from "synaptic";
import { Creature } from "./creature";

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
}

export interface IVector {
    x: number;
    y: number;
}

export interface IVectorInterface {
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
type CoordinateVectorFunction = (x: number, y: number) => IVectorInterface;

type VectorVectorFunction = (v: IVectorInterface) => IVectorInterface;

type NumberVectorFunction = (s: number) => IVectorInterface;

type NumberFunction = () => number;

type VectorFunction = () => IVectorInterface;

type VectorNumberFunction = (v: IVectorInterface) => number;

type VectorNumberVectorFunction = (v: IVectorInterface, amt: number) => IVectorInterface;

type AnyFunction = () => any;