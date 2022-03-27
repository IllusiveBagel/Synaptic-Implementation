import { Creature } from "./Creature";
import { isMobile } from "react-device-detect";
import { IWorld } from "./Interfaces";

export function blastOff(canvas: HTMLCanvasElement | null) {

	var num = 20;
	var fps = 100;

	if (canvas !== null) {
		var ctx = canvas.getContext('2d');

		if (isMobile) {
			canvas.width = window.screen.width;
			canvas.height = window.screen.height;
		}
		else {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		var world: IWorld = {
			creatures: [],
			width: canvas.width,
			height: canvas.height,
			context: ctx
		};

		// popullate
		for (var i = 0; i < num; i++) {
			var x = Math.random() * world.width;
			var y = Math.random() * world.height;

			world.creatures[i] = new Creature(world, x, y);
			world.creatures[i].velocity.random();
		}
	}

	var targetX = function (creature: Creature) {
		var cohesion = creature.cohesion(world.creatures);
		return cohesion.x / world.width;
	};

	var targetY = function (creature: Creature) {
		var cohesion = creature.cohesion(world.creatures);
		return cohesion.y / world.height;
	};

	var targetAngle = function (creature: Creature) {
		var alignment = creature.align(world.creatures);
		return (alignment.angle() + Math.PI) / (Math.PI * 2);
	};

	var loop = function () {
		if (ctx !== null) {
			// fade effect
			ctx.globalAlpha = 0.2;
			ctx.fillStyle = '#282c34';
			ctx.fillRect(0, 0, world.width, world.height);
			ctx.globalAlpha = 1;
		}

		// update each creature
		var creatures = world.creatures;
		creatures.forEach(function (creature) {
			// move
			var input = [];
			for (var i in creatures) {
				input.push(creatures[i].location.x);
				input.push(creatures[i].location.y);
				input.push(creatures[i].velocity.x);
				input.push(creatures[i].velocity.y);
			}
			var output = creature.network.activate(input);
			creature.moveTo(output);

			// learn
			var learningRate = .3;
			var target = [targetX(creature), targetY(creature), targetAngle(creature)];
			creature.network.propagate(learningRate, target);

			// draw
			creature.draw();
		});
		if (window.location.pathname === "/Synaptic-Implementation/" || window.location.pathname === "/Synaptic-Implementation")
			setTimeout(loop, 1000 / fps);
	};

	// blastoff
	loop();
};