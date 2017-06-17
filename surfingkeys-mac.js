// https://github.com/brookhong/Surfingkeys#edit-your-own-settings

// remove a keystroke mapping for Normal mode
unmap('<Ctrl-i>');
unmap('<Ctrl-n');
unmap('<Ctrl-p');

// remove a keystroke mapping for Insert mode
iunmap('<Ctrl-f>');
iunmap('<Ctrl-e>');
iunmap('<Ctrl-n>');
iunmap('<Ctrl-p>');
iunmap('<Alt-b>');
iunmap('<Alt-f>');
iunmap('<Alt-w>');
iunmap('<Alt-d>');

// add a keystroke mapping for Insert mode
imap('<Ctrl-c>', "<Esc>");

// add a keystroke mapping for Visual mode
vmap('<Ctrl-c>', "<Esc>")

// add a keystroke mapping for Omnibar mode
cmap('<Ctrl-c>', "<Esc>")
