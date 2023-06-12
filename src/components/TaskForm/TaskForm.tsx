import "./TaskForm.css";
import { addTask } from "../../types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const TaskForm = ({ addTask }: { addTask: addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue("");
      addTask({ id: uuidv4(), name: inputValue, isCompleted: false });
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p="10px" my="10px" mx="15px" rounded="7px">
      <InputGroup>
        <InputLeftElement>
          <Button type="submit" bg="transparent" _hover={{ backgroundColor: "tranparent" }} _focus={{ backgroundColor: "transparent" }}>+</Button>
        </InputLeftElement>
        <Input type="text" value={inputValue} border="none" focusBorderColor="transparent" autoComplete="off" id="newTask" name="task" placeholder="Add task" onChange={handleChange} />
      </InputGroup>
    </Box>
  )
}

export default TaskForm;