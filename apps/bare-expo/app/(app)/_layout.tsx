import { Slot, Stack, usePathname } from "expo-router";

export default function App(){
	const path = usePathname()
	console.log("fuck",path)
	return <Stack/>
}
