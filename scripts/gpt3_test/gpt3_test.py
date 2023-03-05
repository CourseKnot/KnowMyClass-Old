import openai

# Load your API key
openai.api_key_path = 'userkey'

# Path to comments file
comment_dir = 'comments.txt'

# Output path
output_dir = 'summaries.txt'

# Max number of word for a single GPT3 prompt
max_prompt_len = 1200

# The prompt for GPT3
summary_prompt = 'Give a 200 word summary of the following reviews:'

# Generate a summary for a list of comments
def list_summary(txt_lst):
    str = "\n".join(txt_lst)
    res = openai.Completion.create(model="text-davinci-003", prompt=summary_prompt+'\n'+str, temperature=0.4, max_tokens=2048)
    return res['choices'][0]['text'].strip()

def word_count(txt):
    return len(txt.split())

# Generate a list of summaries for the given list of comments
def generate_summary(txt_lst):
    total_words = 0
    comment_lst, summary_lst = [], []

    for comment in txt_lst:
        # Check if the total length is under max length
        if total_words + word_count(comment) > max_prompt_len:
            summary_lst.append(list_summary(comment_lst))
            comment_lst = []
            total_words = 0
        else:
            total_words += word_count(comment)
            comment_lst.append(comment)
    summary_lst.append(list_summary(comment_lst))

    return summary_lst

if __name__ == '__main__':
    with open(comment_dir,'r') as file:
        summary_lst = generate_summary([x for x in file])
        
    # Feed the summary list to GPT more times until there's only a single summary
    while len(summary_lst) != 1:
        summary_lst = generate_summary(summary_lst)

    print("------Summary Successfully Generated------")

    # Write to file
    with open(output_dir, 'w') as file:
        file.write(summary_lst[0])