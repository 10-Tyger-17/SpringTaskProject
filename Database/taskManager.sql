CREATE DATABASE taskManager;
USE taskManager;

CREATE TABLE TASK(
	ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(255),
    DESCRIPTION TEXT,
    DUE_DATE DATE,
    PRIORITY VARCHAR(40)
);

INSERT INTO TASK (ID, NAME, DESCRIPTION, DUE_DATE, PRIORITY) VALUES
(1, 'Complete Project Report', 'Finish and submit the final project report.', '2025-04-05', 'HIGH'),
(2, 'Prepare Presentation', 'Create slides for the project presentation.', '2025-04-07', 'MEDIUM'),
(3, 'Fix UI Bugs', 'Resolve layout and responsiveness issues in the web app.', '2025-04-03', 'HIGH'),
(4, 'Write Unit Tests', 'Implement unit tests for core application functions.', '2025-04-10', 'MEDIUM'),
(5, 'Database Optimization', 'Improve database queries and indexing.', '2025-04-12', 'LOW'),
(6, 'Review PRs', 'Check and approve pending pull requests.', '2025-04-02', 'HIGH'),
(7, 'Update Documentation', 'Ensure API documentation is up to date.', '2025-04-08', 'MEDIUM'),
(8, 'Deploy to Production', 'Push the latest version of the application to production.', '2025-04-15', 'HIGH'),
(9, 'Team Meeting', 'Discuss project progress and next steps.', '2025-04-01', 'MEDIUM'),
(10, 'Code Refactoring', 'Improve code quality and structure.', '2025-04-09', 'LOW');
