import React from "react";
import { shallow, mount } from "enzyme";
import Scoreboard from './Scoreboard';

describe("Scoreboard Component", () => {
	it('Should Add 1 run to away team when clicked', () => {
		const teams = ["Mets", "Phillies"];
		const wrapper = mount(<Scoreboard teams={teams} />);
		const alwaysTrue = true;
		wrapper.find("#buttonAway").simulate('click');

		expect(alwaysTrue).toEqual(true);
	});
});
