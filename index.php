<?php
$request = $_SERVER['REQUEST_URI'];
$pos = strpos($request, '/php/routes');
$router = substr($request, $pos);

switch ($router) {
    case '/':
        include 'home.php';
        break;
    case '/home':
        include 'home.php';
        break;
    case '/about':
        include 'about.php';
        break;
    case '/gallery':
        include 'gallery.php';
        break;
    case '/contact':
        include 'contact.php';
        break;
    case '/intern':
        include 'intern.php';
        break;
    case '/join':
        include 'join.php';
        break;
    case '/patronize':
        include 'donate.php';
        break;
    case '/blog':
        include 'blog.php'; // Include the main blog page
        break;
    case '/blog-post1':
        include 'blog-post1.php'; // Include the first blog post
        break;
    case '/blog-post2':
        include 'blog-post2.php'; // Include the second blog post
        break;
    case '/join-family':
        include 'seniorform.php'; // Include the second blog post
        break;
    case '/events':
        include 'events.php'; // Include the second blog post
        break;
    case '/team':
        include 'team.php'; // Include the second blog post
        break;
    default:
        include 'home.php'; // Default page is home
        break;
}
