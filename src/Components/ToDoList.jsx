import { useContext, useEffect } from "react";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore"; // Firebase Firestore'dan veri çekmek için
import { db } from "../firebase"; // Firebase bağlantı dosyan
import TodoContext from "../Context/TodoContext";
import { Button, Container, Form } from "react-bootstrap";

const ToDoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "todos"));

        const todosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
        }));
        setTodos(todosData);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchTodos();
  }, [todos]);

  const handleDeleteEvent = async (id) => {
    try {
      const todoRef = doc(db, "todos", id);
      await deleteDoc(todoRef);

      setTodos((prevData) => prevData.filter((data) => data.id !== id));

      console.log("Todo başarıyla silindi!");
    } catch (error) {
      console.error("Todo silinirken hata oluştu:", error);
    }
  };

  const handleCheckOnChange = async (index) => {
    const updatedTodo = { ...todos[index], done: !todos[index].done };
    setTodos((prevData) =>
      prevData.map((td, i) => (i === index ? { ...td, done: !td.done } : td))
    );

    try {
      await updateDoc(doc(db, "todos", todos[index].id), {
        done: updatedTodo.done,
      });
    } catch (error) {}
  };
  return (
    <Container>
      <h1>Todo List --- Toplam Görev Sayısı {todos.length}</h1>
      <ul className="todo-list">
        {todos.length > 0
          ? todos.map((td, index) => (
              <li
                className="list-unstyled bg-white p-3 text-primary"
                key={index}
              >
                <div className="d-flex">
                  <Form.Check
                    checked={td.done}
                    onChange={() => {
                      handleCheckOnChange(index);
                    }}
                    className="me-2 "
                  ></Form.Check>
                  <div className="w-25">
                    {td.title} -{td.done ? "Tamamlandı" : "Tamamlanmadı"}
                  </div>
                  <Button
                    type="button"
                    className="w-25"
                    onClick={() => {
                      handleDeleteEvent(td.id);
                    }}
                  >
                    Sil
                  </Button>
                </div>
              </li>
            ))
          : "Henüz bir görev eklenmedi"}
      </ul>
    </Container>
  );
};

export default ToDoList;
