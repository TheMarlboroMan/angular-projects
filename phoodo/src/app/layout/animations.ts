import {AnimationEntryMetadata} from '@angular/core';
import {trigger, query, animate, transition, style, state} from '@angular/animations';

export const PublicAnimationChangeSection: AnimationEntryMetadata=trigger('publicchangesection', [

	transition('* => *', [
		query(":enter", style({opacity:0, position: "absolute"}), {optional:true}),
		query(":leave", style({opacity:1}), {optional:true}),
		query(":leave", animate('0.3s',style({opacity:0})), {optional:true}),
		query(":enter", style({position: "relative"}), {optional:true}),
		query(":enter", animate('0.3s',style({opacity:1})), {optional:true}),
	]),
]);
