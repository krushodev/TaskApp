import "./TaskContainer.css";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { Task, addTask, changeStatus, deleteTask } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from "@chakra-ui/react";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const addTask: addTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  };

  const changeStatus: changeStatus = (taskId) => {
    setTasksList((prevTasksList) => {
      return prevTasksList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    });
  };

  const deleteTask: deleteTask = (taskId) => {
    const filter = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(filter);
  };

  return (
    <Flex bg="red" flexDirection="column" justify="space-between" maxH="100vh">
      <Box bg="yellowgreen" my="50px" mx="20px" h="100%" overflowY="auto">
        {tasksList.filter(task => {
          return !task.isCompleted
        }).map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
        ))}
        {
          tasksList.some(task => {
            return task.isCompleted
          }) &&
          <>
            <Accordion defaultIndex={[0]} allowMultiple borderColor="transparent">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Text>Completed</Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {tasksList.filter(task => {
                    return task.isCompleted
                  }).map((task) => (
                    <TaskItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus} />
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        }
      </Box>
      <TaskForm addTask={addTask} />
    </Flex >
  );
};

export default TaskContainer;
