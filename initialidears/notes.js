// How Do I Make An App? Seriously.

// https://budibase.com/blog/how-to-make-a-web-app/

// IDEATION 🌼
// Source an idea (yeah)

// What is it?
// Define app, what it will do, who it is for, why am I making it? why would someone use it?
// What problem am I solving? 🤍

// Research? (admittedly, I skipped this)
// Functionality (how deeply)

// How much time do I have to build this app?
// So much time.

// What am I interesting in?
// Everything. But this is about organization.

// What apps do I enjoy using?
// Not Amazon Prime Video
// Can't get Cherwell out of my mind

// What do I like about these apps?
// Clean, intuitive design, enough granularity to make it functional for different types of needs

// How much time/money will this app save or generate for me as a user?
// It's a passion project; I want a personal task management system so I'm building one.

// How much will it improve my life?
// I need to figure out how to measure this one!

// Market Research

// I don't want to.

// Does a similar product exist?
// Definitely, but this is going to be a great learning experience even if it's not a marketable app. But it will be.

// Does a market for this exist?
// Yes, and it always will for task management and asset management and knowledge management
// I am the market.

// My app's target market:
// Budding Overachievers and Seasoned Procrastinators alike
// People who like checklists
// People who like visualizing their daily, weekly, and so on goals
// People who have sent their spouses or children the same task list five hundred times
// People who need to record and organize their priorities
// People looking to maintain and visualize data on their personal productivity
// People who want a faster way to attach documents and assets to their related functionality/usage
// People who freak out when there's way too much paper clutter

// SEO Tools?
// keywords relating to app
// Research the competition

// Defining Functionality ✨

// 

// DESIGN 🌼
// Sketch, first prototype ✅
// Plan workflow (doing that now)
// Wireframe the UI (ha, hahaha)
// Seek early validation (that's what friends are for)

// DEVELOPMENT 🌼
// Architect DB (will hardcode most things in first stages)
// Develop Front End
// Build Back End

// Ray's suggestion: rearch both relational and nonrelation db's so I can justify why I picked one or the other
// Refer to course modules on Auth

// LAUNCH 🌼
// Host web app
// Deploy web app

// When test? How test?
// Unit testing, nothing too complex***

// Disorganized Thoughts 🧁
// What tech am I going to use?
// Vanilla Stack: HTML, CSS, JS + Node and probably SQL backend but nottt quite sure yet
// Will need to figure out Auth's - Authentication and Authorization
// Will I need a CMS?
// Classes / OOP for the Templates and Tasks
// Open tasks could be overwhelming - mass "halt" option w/ note from queue view
// Calendar integrations

// Relational Databases 🌿
// RDBMS or SQL db
// stores data in tables and rows, referred to as records
// SQL Server, Oracle DB, MySQL, IBM DB2
// Free versions: SQL Server Express, PostgrSQL, SQLite, MySQL, MariaDB
// links information from multiple tables through the use of "keys"
// a key is a unique identifier, called a primary key
// included in a record located in another table when that record has a relationship to the primary record
// when unique primary key is added to a record in another table, it is called a foreign key in the associated table
// the connection between primary and foreign key creates a "relationship"
// referential integrity, the accuracy and consistency of data
// data integrity is achieved by using primary and foreign keys
// referential integrity preserves data integrity through contraints
// contraints are the rules that enforce data accuracy by preventing a related record from being deleted without first deleting primary record in main table
// if primary-foreign key relationship added, attempting to delete a primary record will be blocked
// prevents orphaned records
// three rules referential integrity enforces:
// a foreign key must have a corresponding primary key
// when a record in a primary table is deleted, all related records referencing primary key must also be deleted (cascade delete)
// if primary key changes, all corresponding records in other tables using primary key must be modified (cascade update)
// querying data is done by using Structured Query Language, SQL
// SQL can create, retrieve, update and delete records
// heavily relies on primary/foreign key relationship to identify related data
// first choice for an app that requires strong transactional functionality, data mining, complex reporting
// relational databases also provide "indexing"
// a database index is a structure which improves the speed of data retrieval

// YEAH I think I'm going with MySQL 🎈

// STORING USER FILES 🛒
/* When you build a web application, one thing you may need to think about is how you plan to store user files.

If you’re building an application that requires users to upload or download files (images, documents, receipts, etc.) — file storage can be an important part of your application architecture.

Deciding where you’ll store these files, how you’ll access them, and how you’ll secure them is an important part of the engineering process, and can take quite a bit of time to figure out for complex applications. */

// File Storage Options - (article a little outdated but probably still applies)
// Store user files in your database in a text column, or something similar
// Store user files directly on your web server
// Store user files in a file storage service like Amazon S3

// Concerns include security, size of files, scalability / total files stored might be like a lottt
// Think about how users might move, delete a file (uploading and removing from related task probably most common initially)
// Use an API layer to provide security - need to figure out how
// CLOUD BASED OBJECT STORAGE SERVICE

// https://cloud.google.com/storage 🍧
// probably going to roll with google because it's familiar-ish

// graphQL - debugging, querying, accessing db from application
// graphQL + services

// primsa???