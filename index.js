function create_elements(type, attributes) {
    const element = document.createElement(type);
    element.setAttribute('style', `${attributes}`);
    return element;
}

function add_book() {

    function add_book_entry_box() {
        const input_color = 'powderblue'
        const body = document.querySelector('body');

        const temporary_container = document.createElement('div');
            temporary_container.setAttribute("style", `width: 100%; padding-top: 5rem; 
                padding-bottom: 5rem; background-color: white; display: flex; justify-content: center;
                align-items: center;`);
                temporary_container.classList.add("temporary_container");
        
        const book_display = document.getElementById(`book_display`);

        body.insertBefore(temporary_container, book_display);

        const display_box = document.createElement('div');
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
                background-color: ${input_color}; margin: 0 auto;`);
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
                background-color: ${input_color}; margin: 0 auto;`);
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
                background-color: ${input_color}; margin: 0 auto;`);
            book_pages_flex_container.appendChild(book_pages_input);

        display_box.appendChild(book_pages_flex_container);  
        
            const button = create_elements('button', `padding: .5rem; width: 85%; color: color; margin: 0 auto;
                margin-top: 3rem; background-color: teal; font-size: xx-large; margin-top: auto; margin-bottom: 2rem;
                border: 5px solid black;`);
                button.textContent = 'SUBMIT';
                button.classList.add("add_book_submit_button");

            display_box.appendChild(button);

        function submit_book() {
            
        }

            document.querySelector('.add_book_submit_button').addEventListener("click", submit_book);
    }
    add_book_entry_box()
}   

document.getElementById("add_book").addEventListener("click", add_book);



    // function add_single_book() {
    //     const add_book_button = document.querySelector("#add_book");
    //     const container = document.createElement('div');
    //         container.setAttribute("style", `height: 17.5rem; width: 12.5rem; border: 5px solid black; 
    //         background-color: midnightblue; margin: 5rem;`);
    //     const book_container = document.getElementById("book_display");
    //     book_container.appendChild(container);
    // }

