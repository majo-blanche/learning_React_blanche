import React, { useEffect, useState } from "react";
import { SearchCheck } from "lucide-react";
import {
	Bell,
	Search,
	Menu,
	MailOpen,
	LayoutList,
	Sun,
	LayoutGrid,
	Moon,
} from "lucide-react";
const Header = () => {
	const [themes, setThemes] = useState(false);
	const change = () => {
		setThemes(!themes);
	};
	useEffect(() => {
		if (themes) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [themes]);

	return (
		<div className="header">
			<div className="head">
				<div className="ham">
					<Menu />
				</div>
				<div className="search">
					<SearchCheck className="search-icn" />

					<input type="text" placeholder="search" />
				</div>
			</div>
			<div className="Icons">
				<div className="icon">
					<Bell />
				</div>
				<div className="icon">
					<LayoutList />
				</div>
				<div className="mail">
					<MailOpen />
				</div>
				<div className="sun" onClick={change}>
					{themes ? <Moon /> : <Sun />}
				</div>
				
				<div className="icon">
					<LayoutGrid />
				</div>
			</div>
		</div>
	);
};

export default Header;
