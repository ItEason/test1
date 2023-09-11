<template>
    <section id="box" class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <h1 class="section-title text-center">小旦BOX</h1>
                    <div class="section-title-border margin-t-20"></div>
                    <p class="section-subtitle font-secondary text-muted text-center padding-t-30">Reshape the AI drive
                        application
                        pattern, creating unprecedented possibilities for AI and human intelligence fusion to pave the way.
                    </p>
                </div>
            </div>
            <div class="row padding-t-30 justify-content-center">
                <div class="chat-container d-flex justify-content-between col-lg-12">
                    <div class="chat-messages">
                        <div class="message received">
                            <p class="d-flex align-items-center justify-content-center">
                                Hello! How can I assist you today?
                            </p>
                        </div>
                        <div class="message sent">
                            <p>I have a question about your products.</p>
                        </div>
                        <div class="message received">
                            <p>Sure, I'll be happy to help. What would you like to know?</p>
                        </div>
                    </div>

                    <div class="chat-input">
                        <input type="text" placeholder="Type your message..." />
                        <button class="send">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                                <path fill="#00affa"
                                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z" />
                            </svg> </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

</script>
<style  scoped>
::v-deep .chat-container {
    flex-direction: column;
    min-height: 425px;
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    background: white;
}

.chat-messages {
    padding: 10px;
}

.message {
    display: flex;
    margin-bottom: 10px;
}

.received {
    justify-content: flex-start;
}

.sent {
    justify-content: flex-end;
}

.message p {
    background-color: #eee;
    border-radius: 10px;
    padding: 14px;
    color: black;
    box-shadow: inset 0 0 0 1px #dfc5ff1a;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
}

input[type="text"] {
    flex: 1;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
}

.send {
    margin-left: 10px;
    padding: 5px 10px;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>