import './App.css';
import HomePage from "./page/HomePage";
import {Center, Stack} from "@chakra-ui/react";

function App() {
    return (
        <Stack>
            <Center>
                <HomePage/>
            </Center>
        </Stack>
    );
}

export default App;
