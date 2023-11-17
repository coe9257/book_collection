const book_array = [];

let id_num = 0;

function create_elements(type, attributes, class_name, id) {
    const element = document.createElement(type);
    element.setAttribute('style', `${attributes}`);

    if (class_name != undefined) {
        element.classList.add(`${class_name}`);
    };

    let does_id_already_exist = false

    // checks if ID parameter is already in an element in book_array
    book_array.forEach(element => {
        if (element.id === id) {
            does_id_already_exist = true;
        }else {
            id = `DUPLICATE_${id_num}`;
            id_num++;
        };
    });

    if (id != undefined && does_id_already_exist == false) {
        element.id = `${id}`;
    };

    
    return element;
};

function testString(book_title, book_author, book_pages) {
    if (book_title != "" && book_title != null 
        && book_author != "" && book_author != null 
        && book_pages != "" && book_pages != null) {
        return true;
    }else {
        return false;
    }
};

function add_book() {

    function add_book_entry_box() {
        
        const body = document.querySelector('body');

        if (!document.querySelector('.temporary_container')) {
            const temporary_container = document.createElement('div');
            temporary_container.setAttribute("style", `width: 100%; padding-top: 5rem; 
                padding-bottom: 5rem; background-color: white; display: flex; justify-content: center;
                align-items: center;`);
                temporary_container.classList.add("temporary_container");
        
            const book_display = document.getElementById(`book_display`);

            body.insertBefore(temporary_container, book_display);
        };


    }
    add_book_entry_box();

    function create_div_parts(){
        const temporary_container = document.querySelector('.temporary_container');
        const display_box = document.createElement('div');
        const input_color = 'powderblue';
            display_box.setAttribute('style', `height: 30rem; width: 25rem; border: 5px solid black;
                background-color: midnightblue; display: flex; flex-direction: column; 
                align-items: flex-start; padding-top: 2.5rem;`);
                display_box.classList.add("display_box");
        temporary_container.appendChild(display_box);

            const book_title_flex_container = create_elements(`div`, `display: flex; flex-direction: column;
                flex-wrap: wrap; margin: 0 auto; width: 100%;`);
                book_title_flex_container.classList.add("book_title_flex_container");

            const book_title_div = create_elements('div', `color: white; margin: 0 auto; 
                margin-bottom: .75rem;`);
                book_title_div.textContent = "BOOK TITLE";
                book_title_div.classList.add('book_title_div');
            book_title_flex_container.appendChild(book_title_div);

            const book_title_input = create_elements('input', `width: 90%; height: 1.5rem; 
                background-color: ${input_color}; margin: 0 auto;`, `book_title_input`);
            book_title_flex_container.appendChild(book_title_input);

        display_box.appendChild(book_title_flex_container);

            const book_author_flex_container = create_elements(`div`, `display: flex; flex-direction: column;
                    flex-wrap: wrap; margin: 0 auto; width: 100%; margin-top: 3rem;`);
                book_author_flex_container.classList.add("book_author_flex_container");

            const book_author_div = create_elements('div', `color: white; margin: 0 auto; 
                    margin-bottom: .75rem;`);
                book_author_div.textContent = "BOOK AUTHOR";
                book_author_div.classList.add('book_author_div');
            book_author_flex_container.appendChild(book_author_div);

            const book_author_input = create_elements('input', `width: 90%; height: 1.5rem; 
                background-color: ${input_color}; margin: 0 auto;`, `book_author_input`);
            book_author_flex_container.appendChild(book_author_input);

        display_box.appendChild(book_author_flex_container);        

            const book_pages_flex_container = create_elements(`div`, `display: flex; flex-direction: column;
                flex-wrap: wrap; margin: 0 auto; width: 100%; margin-top: 3rem;`);
            book_pages_flex_container.classList.add("book_pages_flex_container");

            const book_pages_div = create_elements('div', `color: white; margin: 0 auto; 
                margin-bottom: .75rem;`);
                book_pages_div.textContent = "BOOK PAGES";
                book_pages_div.classList.add('book_title_div');
            book_pages_flex_container.appendChild(book_pages_div);

            const book_pages_input = create_elements('input', `width: 90%; height: 1.5rem; 
                background-color: ${input_color}; margin: 0 auto;`, `book_pages_input`);
            book_pages_flex_container.appendChild(book_pages_input);

        display_box.appendChild(book_pages_flex_container);  
        
            const button = create_elements('button', `padding: .5rem; width: 85%; color: color; margin: 0 auto;
                margin-top: 3rem; background-color: teal; font-size: xx-large; margin-top: auto; margin-bottom: 2rem;
                border: 5px solid black;`);
                button.textContent = 'SUBMIT';
                button.classList.add("add_book_submit_button");

            display_box.appendChild(button);
    }
    create_div_parts();

    function submit_book() {

        const book_title = document.querySelector(`.book_title_input`).value;
        const book_author = document.querySelector(`.book_author_input`).value;
        const book_pages = document.querySelector(`.book_pages_input`).value;

        if (testString(book_title, book_author, book_pages) == true) {
            submit_book_values(book_title, book_author, book_pages);
        }else {
            return false;
        };
    };

    document.querySelector('.add_book_submit_button').addEventListener("click", submit_book);
    
};

function submit_book_values(book_title, book_author, book_pages) {
    let text_attributes = `width: 90%; height: 1rem; border: 1px solid black; 
        background-color: white; color: black; display: flex; flex-direction: column; 
        margin: 0 auto; margin-top: 1.5rem; padding: .5rem;`
        // type, attributes, class_name, id
    const book_element = create_elements('div', `width: 17.5rem; height: 17.5rem; border: 1px solid black;
        background-color: black; margin-top: 2.5rem; book_object; margin: 0 0 0 2rem; display: flex;
        flex-direction: column; align-items: center book_element; margin-top: 2rem`, 'book_input', `xr_${id_num}`);
        id_num++;

    const book_title_div = create_elements(`div`, `${text_attributes} margin-top: 2.5rem;`, `book_objects`, 
        `first_book_object_div_${id_num}`);
        id_num++;
        book_title_div.textContent = book_title;
    
    book_element.appendChild(book_title_div);

    const book_author_div = create_elements(`div`, `${text_attributes}`, `book_objects`, `${book_author}${id_num}`);
            book_author_div.textContent = book_author;
            id_num++;

    book_element.appendChild(book_author_div);

        const book_pages_div = create_elements(`div`, `${text_attributes}`, `book_objects`, `${book_pages}${id_num}`);
            book_pages_div.textContent = `Pages: ${book_pages}`;
            id_num++;

    book_element.appendChild(book_pages_div);

    // create CSS for close button
    const delete_book_div = create_elements('button', `${text_attributes} color: white; background-color: teal; display: block;
        height: auto; padding: 1rem; border: 5px solid ridge;`);
        delete_book_div.textContent = 'DELETE';
        delete_book_div.addEventListener('click', deleteBook);

    book_element.appendChild(delete_book_div);


    book_array.push(book_element);

    append_books_from_array();
};

function append_books_from_array() {
    book_array.forEach((element) => {
        const book_display_box = document.getElementById("book_display");
        book_display_box.appendChild(element);
    });
    close_add_book_container();
};

function close_add_book_container() {

    const parent_container = document.querySelector('.temporary_container');
    const submit_book_div = document.querySelector('.display_box');
        parent_container.removeChild(submit_book_div);

    const body = document.querySelector('body');
    const temporary_container = document.querySelector('.temporary_container');
        body.removeChild(temporary_container);
};

function deleteBook(e) {
    //button on book div
    const clickedElement = this;
    //book container div
    const parentElement = clickedElement.parentNode;
    //container holding all book divs
    const div_container = parentElement.parentNode;

    const book_div_id = parentElement.id
    
    let array_id = null;

    book_array.forEach((element, index) => {
        if (element.id == book_div_id) {
            book_array.splice(index, 1);
            div_container.removeChild(parentElement);
        };
    })

    // console.log(parentElement);
};

document.getElementById("add_book").addEventListener("click", add_book);
