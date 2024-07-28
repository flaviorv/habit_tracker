import {Time} from "./time"

test("Should parse to Time correctly", () => {
    const input = "12:23"
    const output = Time.parse(input);
    expect(output.getHour()).toBe(12);
    expect(output.getMinute()).toBe(23);
})

test("Getters should return correctly", () => {
    const inputHour = 9;
    const inputMinute = 2;
    const output = new Time(inputHour, inputMinute);
    expect(output.getHour()).toBe(inputHour);
    expect(output.getMinute()).toBe(inputMinute);
})

test("Should parse to string correctly", () => {
    const input = new Time(1, 39);
    const output = input.toString();
    expect(output).toBe("01:39");
})

test.each([["13: :04"], ["1304"]])("Should fail to parse to Time given invalid format - input %s", (input: string) => {
    const t = () => {
        Time.parse(input);
    };

    expect(t).toThrow("Invalid Time format");
})

test.each([[-1], [24]])("Should fail to set hour given number that's not in the acceptable range - input = %i", (wrongHour: number) => {
    const minutes = 59;
    const t = () => {
        new Time(wrongHour, minutes);
    }
    expect(t).toThrow("Hour have to be greater than 0 and lower than 24");
})

test.each([[-1], [60]])("Should fail to set minutes given number that's not in the acceptable range - input = %i", (wrongMinutes: number) => {
    const hour = 23;
    const t = () => {
        new Time(hour, wrongMinutes);
    }
    expect(t).toThrow("Minute have to be greater than 0 and lower than 60");
})