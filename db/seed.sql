\c tasks_dev;

INSERT INTO tasks (task_name, description, assigned_to, due_date, is_complete, priority, notes)
VALUES
    ('Respond to emails', 'Provide quotes for customer inquiries', 'Jessica', '2023-11-10', true, 2, 'ten more emails to respond to'),
    ('Invoices', 'Create and send out invoices to all customers', 'Kathy', '2023-11-11', false, 1, 'cancel unpaid invoices'),
    ('Inventory', 'Check that all ingredients and supplies are available for this week orders ', 'Jessica', '2023-11-11', true, 1, 'remember to purchase edible images'),
    ('Bake', 'Bake all cake layers for this week orders', 'Marcia', '2023-11-11', false, 2, '20 more layers to bake'),
    ('prep', 'Prepare all frostings and fondant decorations for this week orders', 'Marcia', '2023-11-11', true, 1, 'make 20 fondant roses');
