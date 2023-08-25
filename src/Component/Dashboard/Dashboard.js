import { useEffect } from 'react';
import { Card1, Card2, thumbnailUrl, authorUrl, authorUrl2 } from '../Constants'
import styles from './Dashboard.module.css'
import { useState } from 'react';
import Card from './Card';
export default function Dashboard(props) {

    const [blogs, setBlogs] = useState([]);
    const [questions, setQuestions] = useState([]);


    const getAllBlogs = async () => {
        const response = await fetch('https://crackube-backend-test.onrender.com/blogs/getAll');
        const data = await response.json();
        console.log(data);
        setBlogs(data);
    }

    const getAllQuestions = async () => {
        const response = await fetch('https://crackube-backend-test.onrender.com/questions/get');
        const data = await response.json();
        setQuestions(data);
    }

    useEffect(() => {
        getAllBlogs();
        getAllQuestions();
    }, []);
    console.log(blogs);
    return (
        <div className={`${styles[props.type == "card1" ? "dashboard1" : "dashboard2"]}`}>
            {
                props.type === 'card1' && blogs && blogs.map((blog, index) => (
                    // <Card1
                    //     key={blog._id}
                    //     id={blog._id}
                    //     thumbnail={blog.blogImageUrl}
                    //     authorImage={blog.blogImageUrl}
                    //     title={blog.blogTitle}
                    //     author={blog.userPosted}
                    //     modified={blog.postedOn}
                    // />
                    <Card
                    key={blog._id}
                        id={blog._id}
                        thumbnail={blog.blogImageUrl}
                        authorImage={blog.blogImageUrl}
                        title={blog.blogTitle}
                        author={blog.userPosted}
                        modified={blog.postedOn}
                    />

                ))
            }
            
        </div>
    );
}