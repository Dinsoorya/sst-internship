function grace(name,callback)
{
    console.log("hello "+name+ "!");
    callback();

}
function saygoodbye()
{
    console.log(" adich keri vaa!")
}
grace("alice",saygoodbye)