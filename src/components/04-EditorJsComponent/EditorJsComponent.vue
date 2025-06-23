<template>
    <div class="bg-zinc-50 p-4 border-1 border-zinc-200 rounded-md">
        <p class="text-4xl text-zinc-700 font-medium">Editorjs Demo</p>
        <div id="editorjs" class="mt-3">

        </div>
        <button class="py-2 px-4 bg-white text-zinc-950 border-zinc-300 hover:bg-zinc-300 rounded-sm "
            @click.prevent="handleSaveData">Save</button>
    </div>
</template>
<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Quote from '@editorjs/quote';
// embed does not work
import Embed from '@editorjs/embed';
import RawTool from '@editorjs/raw';
// linktool allows embeds but I think will only work when live with https
import LinkTool from '@editorjs/link';
import SimpleImage from "@editorjs/simple-image";
// this only works for one highlight in a line
import InlineCode from '@editorjs/inline-code';
import Personality from '@editorjs/personality';
import Marker from '@editorjs/marker';
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'
import Delimiter from '@editorjs/delimiter'

export default {
    name: "EditorJsComponent",
    data() {
        return {
            editor: null,
            editorSettings: {
                holder: 'editorjs',
                tools: {
                    code: {
                        class: CodeTool
                    },
                    paragraph: {
                        class: Paragraph,
                    },
                    header: {
                        class: Header,
                        config: {
                            placeholder: 'Enter a header',
                            levels: [1, 2, 3, 4, 5],
                            defaultLevel: 2
                        },
                        inlineToolbar: ['link'],
                        shortcut: 'CMD+SHIFT+H',
                    },
                    personality: {
                        class: Personality,
                        config: {
                            endpoint: 'http://localhost:8008/uploadFile'  // Your backend file uploader endpoint
                        }
                    },
                    List: {
                        class: EditorjsList,
                        inlineToolbar: true,
                        config: {
                            defaultStyle: 'unordered'
                        },
                    },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+O',
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote\'s author',
                        },
                    },
                    Marker: {
                        class: Marker,
                        shortcut: 'CMD+SHIFT+M',
                    },
                    raw: RawTool,
                    image: SimpleImage,
                    embed: {
                        class: Embed,
                        config: {
                            services: {
                                youtube: true,
                                coub: true,
                                imgur: true
                            }
                        }
                    },
                    table: {
                        class: Table,
                        inlineToolbar: true,
                        config: {
                            rows: 2,
                            cols: 3,
                        },
                    },
                    warning: {
                        class: Warning,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+W',
                        config: {
                            titlePlaceholder: 'Title',
                            messagePlaceholder: 'Message',
                        },
                    },
                    delimiter: Delimiter,
                    linkTool: {
                        class: LinkTool,
                        config: {
                            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                        }
                    },
                    inlineCode: {
                        class: InlineCode,
                        shortcut: 'CMD+SHIFT+M',
                    },
                }
            }
        }
    },
    methods: {
        async handleSaveData() {
            const data = await this.editor.save()
            console.log(data)
        }

    },
    mounted() {
        this.editor = new EditorJS(this.editorSettings)
    },
    beforeUnmount() {
        this.editor.destroy();
    }
}

</script>