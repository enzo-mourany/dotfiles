"use strict";
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
    config: {
        // open hyper from anywhere
        openDevToolsKey: 'Command+Control+Alt+O',
        // macos custom touchbar
        hyperCustomTouchbar: [
            // if you just need a single button then don't add options array
            { label: 'clear', command: 'clear', backgroundColor: '#B53F46' },
            {
                label: 'npm',
                options: [
                    { label: 'start', command: 'npm start' },
                    { label: 'install', command: 'npm install' },
                    { label: 'build', command: 'npm run build' },
                    { label: 'dev', command: 'npm run dev' },
                    { label: 'list', command: 'npm list -g --depth=0' },
                    { label: 'update', command: 'npm install -g npm@latest' },
                ]
            },
            {
                label: 'git',
                options: [
                    { label: 'diff', command: 'git diff' },
                    { label: 'status', command: 'git status' },
                    { label: 'log', command: 'git log' },
                    { label: 'add .', command: 'git add .', icon: '/tmp/icons8-add-file-44.png', iconPosition: 'right' },
                    { label: 'clone', command: 'git clone ', prompt: true },
                ]
            },
            {
                label: 'vim',
                options: [
                    { label: 'quit', command: ':q!', esc: true },
                    { label: 'save & quit', command: ':x', esc: true },
                    { label: 'visual', command: ':v', esc: true, backgroundColor: '#FD7CFC' },
                ],
            },
        ],
        // choose either `'stable'` for receiving highly polished,
        // or `'canary'` for less polished but more frequent updates
        updateChannel: 'stable',
        // default font size in pixels for all tabs
        fontSize: 13,
        // font family with optional fallbacks
        fontFamily: 'MesloLGS NF',
        // default font weight: 'normal' or 'bold'
        fontWeight: 'normal',
        // font weight for bold characters: 'normal' or 'bold'
        fontWeightBold: 'normal',
        // line height as a relative unit
        lineHeight: 1.1,
        // letter spacing as a relative unit
        letterSpacing: 0,
        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: '#FFFFFF',
        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',
        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorShape: 'BEAM',
        // set to `true` (without backticks and without quotes) for blinking cursor
        cursorBlink: false,
        // color of the text
        foregroundColor: '#fff',
        // opacity is only supported on macOS
        opacity: 1,
        // terminal background color
        backgroundColor: '#000',
        // terminal selection color
        selectionColor: 'rgba(248,28,229,0.3)',
        // border color (window, tabs)
        borderColor: '#333',
        // custom CSS to embed in the main window
        css: '',
        // custom CSS to embed in the terminal window
        termCSS: '',
        // set custom startup directory (must be an absolute path)
        workingDirectory: '',
        // if you're using a Linux setup which show native menus, set to false
        // default: `true` on Linux, `true` on Windows, ignored on macOS
        showHamburgerMenu: '',
        // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
        showWindowControls: '',
        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '12px 14px',
        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        colors: {
            black: '#000000',
            red: '#C51E14',
            green: '#1DC121',
            yellow: '#C7C329',
            blue: '#0A2FC4',
            magenta: '#C839C5',
            cyan: '#20C5C6',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#FD6F6B',
            lightGreen: '#67F86F',
            lightYellow: '#FFFA72',
            lightBlue: '#6A76FB',
            lightMagenta: '#FD7CFC',
            lightCyan: '#68FDFE',
            lightWhite: '#FFFFFF',
            limeGreen: '#32CD32',
            lightCoral: '#F08080',
        },
        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        //
        // Windows
        // - Make sure to use a full path if the binary name doesn't work
        // - Remove `--login` in shellArgs
        //
        // Windows Subsystem for Linux (WSL) - previously Bash on Windows
        // - Example: `C:\\Windows\\System32\\wsl.exe`
        //
        // Git-bash on Windows
        // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
        //
        // PowerShell on Windows
        // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
        //
        // Cygwin
        // - Example: `C:\\cygwin64\\bin\\bash.exe`
        shell: '/bin/zsh',
        // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
        // by default `['--login']` will be used
        shellArgs: ['--login'],
        // for environment variables
        env: {},
        // Supported Options:
        //  1. 'SOUND' -> Enables the bell as a sound
        //  2. false: turns off the bell
        bell: 'false',
        // An absolute file path to a sound file on the machine.
        // bellSoundURL: '/path/to/sound/file',
        // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
        copyOnSelect: false,
        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: true,
        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        quickEdit: false,
        // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
        // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
        // (inside tmux or vim with mouse mode enabled for example).
        macOptionSelectionMode: 'vertical',
        // Whether to use the WebGL renderer. Set it to false to use canvas-based
        // rendering (slower, but supports transparent backgrounds)
        webGLRenderer: true,
        // keypress required for weblink activation: [ctrl|alt|meta|shift]
        // todo: does not pick up config changes automatically, need to restart terminal :/
        webLinksActivationKey: '',
        // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
        disableLigatures: true,
        // set to true to disable auto updates
        disableAutoUpdates: false,
        // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
        screenReaderMode: false,
        // set to true to preserve working directory when creating splits or tabs
        preserveCWD: true,
        // for advanced config flags please refer to https://hyper.is/#cfg
        summon: {
            hotkey: 'Alt+Opt+H',
        },
        hypernpm: {
            // wil run `npm run lint`
            1: "lint",
            // will run `npm test` since it's a native npm command
            5: "test"
        },
    },
    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: [
        "hyper-night-owl",
        "hyper-opacity",
        "hyper-tabs-enhanced",
        "hyperterm-summon",
        "hyperterm-paste",
        "hyper-hide-scroll",
        "hypernpm",
        "hyper-manager",
        "hyper-dnd-tabs",
        "hyperterm-open-devtools",
        "hyper-custom-touchbar"
    ],
    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [
        "fig-hyper-integration"
    ],
    keymaps: {
        // Example
        // 'window:devtools': 'cmd+alt+o',
    },
};
//# sourceMappingURL=config-default.js.map