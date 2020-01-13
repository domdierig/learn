fn main() {
	let required_fuel = get_required_fuel_for_given_mass(31);
	println!("your required fuel value is: {}", required_fuel);
}

fn get_required_fuel_for_given_mass(mass: i32) -> i32 {
	let mass_floating = mass as f64;

	let mass_divided_by_3 = mass_floating / 3.0;

	let rounded_down = mass_divided_by_3.floor();

	let result_floating = rounded_down - 2.0;

	let result = result_floating as i32;

	return result;
}

#[test]
fn fuel_should_be_2_with_mass_12() {
	let result = get_required_fuel_for_given_mass(12);

	assert_eq!(2, result);
}

#[test]
fn fuel_should_be_2_with_mass_14() {
	let result = get_required_fuel_for_given_mass(14);

	assert_eq!(2, result);
}

#[test]
fn fuel_should_be_654_with_mass_1969() {
	let result = get_required_fuel_for_given_mass(1969);

	assert_eq!(654, result);
}

#[test]
fn fuel_should_be_33583_with_mass_100756() {
	let result = get_required_fuel_for_given_mass(100756);

	assert_eq!(33583, result);
}