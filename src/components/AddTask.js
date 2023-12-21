import Button from './Button'

export default function AddTask({onAddTask}){
    function handleSubmit(e){
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        //fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson)
        onAddTask(formJson.idInput, formJson.nameInput, formJson.dayInput, formJson.reminderInput)
    }

    return(
        <>  
            <form method='post' onSubmit={handleSubmit}>
                <div>
                    Add a new task:
                    <li>
                        <label>Id</label>: 
                        <input name="idInput"></input>
                    </li>
                    <li>
                        <label>Name</label>: 
                        <input name="nameInput"></input>
                    </li>
                    <li>
                        <label>Day</label>: 
                        <input name="dayInput"></input>
                    </li>
                    <li>
                        <label>Reminder</label>: 
                        <input type="checkbox" name="reminderInput"></input>
                    </li>
                </div>
                <div>
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </>
    )
}