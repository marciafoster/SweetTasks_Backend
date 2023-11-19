\c tasks_dev;

INSERT INTO tasks (task_name, description, assigned_to, due_date, is_complete, priority)
VALUES
    ('Respond to emails', 'Provide quotes for customer inquiries', 'Jessica', '2023-11-10', true, 2),
    ('Invoices', 'Create and send out invoices to all customers', 'Kathy', '2023-11-11', false, 1),
    ('Inventory', 'Check that all ingredients and supplies are available for this week orders ', 'Jessica', '2023-11-11', true, 1),
    ('Bake', 'Bake all cake layers for this week orders', 'Marcia', '2023-11-11', false, 2),
    ('prep', 'Prepare all frostings and fondant decorations for this week orders', 'Marcia', '2023-11-11', true, 1);
