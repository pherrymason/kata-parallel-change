class ShoppingCart {
	price = 0;
	prices = [];

	add(price) {
		this.price = price;
		this.prices.push(price);
	}

	calculateTotalPrice() {
		return this.prices.reduce((ac, price) => ac + price, 0);
	}

	numberOfProducts = () => this.prices.length;

	hasDiscount = () => this.prices.some((price) => price > 100);
}

export default ShoppingCart;
