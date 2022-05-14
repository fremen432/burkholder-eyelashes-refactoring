import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { setPageMethods } from "../../../state management/actions/pageMethods";
// import { setPage_cart } from '../../../actions/pageMethods';

export default function CartIcon() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems);

	return (
		<div className="CartIcon">
			<a
				href="/#Cart"
				onClick={() => dispatch(setPageMethods.cart())}
				className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				<ShoppingCartIcon
					className="w-5 h-5 text-gray-400"
					aria-hidden="true"
				/>
				<span className="cart-item-counter">{cartItems.length}</span>
			</a>
		</div>
	);
}
