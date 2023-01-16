import { useState } from "react";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<h1>Register</h1>
			<form>
				<input
					type="text"
					placeholder="name..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
                <br />
				<input
					type="email"
					placeholder="email..."
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
                <br />
				<input
					type="password"
					placeholder="password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
                <br />
                <input type="submit" />
			</form>
		</div>
	);
};

export default Register;
