import { Router } from "express";

const router = Router();



router.get('/', (req, res) => {
    const title = 'Project simple sample.Runners';
    const textTitle = 'Here you can see how to deploy a simple project on your own server, using express, special runners for separate servers between other processes and other frameworks';
    const imageUrl = '/images/screen1.png' ;
    res.render('index', { title, textTitle, imageUrl  });
});

router.get('/next_article', (req, res) => {
    const title = 'Other one aricle title from database';
    const textTitle = 'Here i created a new url page with express and ejs instrument'; 
    const imageUrl = '/images/screen2.png' ;
    res.render('index', { title, textTitle, imageUrl  });
});

export default router;