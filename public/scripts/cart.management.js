const addToCartButtonElement = document.querySelector(
	"#product-details button"
);
const badge = document.querySelector(".nav-items .badge");

async function addToCart() {
	const productId = addToCartButtonElement.dataset.productid;
	const csrfToken = addToCartButtonElement.dataset.csrf;
	let response;

	try {
		response = await fetch("/cart/items", {
			method: "post",
			body: JSON.stringify({
				productId: productId,
				_csrf: csrfToken,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		alert("Something went wrong!");
		return;
	}

	if (!response.ok) {
		alert("Something went wrong!");
		return;
	}
	const responsedData = await response.json();

	const newTotalQuantity = responsedData.newTotalItems;
	badge.textContent = newTotalQuantity;
}

addToCartButtonElement.addEventListener("click", addToCart);
