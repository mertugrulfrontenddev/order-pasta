import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import TodoContext from "../Context/TodoContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddToDo = () => {
  const { addToDo } = useContext(TodoContext); // Context'ten addToDo fonksiyonunu alıyoruz
  const [formData, setFormData] = useState({
    title: "", // Başlangıçta boş bir başlık
    done: false, // Başlangıçta yapılmamış (false) olarak işaretlenmiş
  });

  // Firebase'e yeni todo kaydetmek için kullanılan fonksiyon
  const saveToDo = async (toDoData) => {
    try {
      const refToDo = collection(db, "todos"); // "todos" koleksiyonuna başvuruyoruz
      await addDoc(refToDo, toDoData); // Firebase'e yeni veriyi ekliyoruz
      console.log("Todo başarıyla kaydedildi:", toDoData); // Başarı durumunda log
    } catch (error) {
      console.error("Todo kaydedilirken hata oluştu: ", error); // Hata durumunda log
    }
  };

  // Checkbox durumu değiştiğinde
  const eventHandlerCheck = (e) => {
    const checkValue = e.target.checked;
    setFormData((prevForm) => ({ ...prevForm, done: checkValue }));
  };

  // Başlık alanındaki değer değiştiğinde
  const eventHandlerTitle = (e) => {
    const value = e.target.value;
    setFormData((prevForm) => ({ ...prevForm, title: value }));
  };

  // Form submit edildiğinde
  const formSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelliyoruz
    await saveToDo(formData); // Firebase'e kaydet
    addToDo(formData); // Context'e ekle

    // Formu sıfırla
    setFormData({ title: "", done: false });

    // Başarı mesajı gösterme
    alert("Task successfully added!");
  };

  return (
    <Container>
      <Form className="w-50" onSubmit={formSubmit}>
        <Form.Group>
          <Form.Label className="mt-3 text-secondary">Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Task"
            value={formData.title}
            onChange={eventHandlerTitle} // Başlık değiştiğinde event handler
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Done?"
            className="mt-3"
            checked={formData.done} // Checkbox'un durumu
            onChange={eventHandlerCheck} // Checkbox değiştiğinde event handler
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default AddToDo;
