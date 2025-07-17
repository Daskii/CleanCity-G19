import React, { useState, useEffect } from 'react';
import './Profile.css';

<<<<<<< HEAD
const LS_POSTS = 'communityPosts';
const LS_LIKES = 'communityLikes';
const LS_COMMENTS = 'communityComments';

function getPosts() {
  const saved = localStorage.getItem(LS_POSTS);
  if (saved) return JSON.parse(saved);
  return [
    {
      id: 1,
      content: 'Just scheduled my weekly pickup! CleanCity makes it so easy to keep our neighborhood clean.',
      author: 'Sarah J.',
      date: '2024-06-01',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      content: 'Found a great recycling tip: rinse containers before recycling to avoid contamination.',
      author: 'Mike R.',
      date: '2024-05-30',
      likes: 8,
      comments: 1,
    },
    {
      id: 3,
      content: 'Our street looks amazing after the cleanup event! Thanks everyone for participating.',
      author: 'Admin',
      date: '2024-05-28',
      likes: 15,
      comments: 5,
    },
  ];
}

function getLikes() {
  const saved = localStorage.getItem(LS_LIKES);
  return saved ? JSON.parse(saved) : {};
}

function getComments() {
  const saved = localStorage.getItem(LS_COMMENTS);
  return saved ? JSON.parse(saved) : {};
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState(getPosts());
  const [newPost, setNewPost] = useState('');
  const [likes, setLikes] = useState(getLikes());
  const [comments, setComments] = useState(getComments());
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    localStorage.setItem(LS_POSTS, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem(LS_LIKES, JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem(LS_COMMENTS, JSON.stringify(comments));
  }, [comments]);

  function addPost(e) {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    const post = {
      id: Date.now(),
      content: newPost,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      comments: 0,
    };
    setPosts([post, ...posts]);
    setNewPost('');
  }

  function toggleLike(postId) {
    setLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  }

  function addComment(postId) {
    const commentText = newComment[postId];
    if (!commentText?.trim()) return;
    
    const comment = {
      id: Date.now(),
      content: commentText,
      author: 'You',
      date: new Date().toISOString().slice(0, 10),
    };
    
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));
    
    setNewComment(prev => ({ ...prev, [postId]: '' }));
  }

  return (
    <div className="community-page-root">
      <div className="community-card-main" role="main" aria-label="Community Feed">
        <div className="community-brand">🧹 <span>CleanCity</span></div>
        <h2>Community Feed</h2>
        <form className="community-post-form" onSubmit={addPost} aria-label="Create New Post">
          <textarea
            placeholder="Share something with the community..."
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            required
          />
          <button type="submit" className="community-action-btn">Post</button>
        </form>
        <section className="community-feed">
          <h3>Recent Posts</h3>
          <div className="community-posts">
            {posts.map(post => (
              <article className="community-post-card" key={post.id} role="article">
                <div className="post-header">
                  <span className="post-author">{post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-actions">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`like-btn ${likes[post.id] ? 'liked' : ''}`}
                    aria-label={`${likes[post.id] ? 'Unlike' : 'Like'} this post`}
                  >
                    ❤️ {post.likes + (likes[post.id] ? 1 : 0)}
                  </button>
                  <button
                    onClick={() => setShowComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                    className="comment-btn"
                    aria-label="Show comments"
                  >
                    💬 {comments[post.id]?.length || 0}
                  </button>
                </div>
                {showComments[post.id] && (
                  <div className="comments-section">
                    <div className="comments-list">
                      {comments[post.id]?.map(comment => (
                        <div key={comment.id} className="comment">
                          <strong>{comment.author}</strong>: {comment.content}
                        </div>
                      ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); addComment(post.id); }} className="comment-form">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment[post.id] || ''}
                        onChange={e => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                      />
                      <button type="submit" className="community-action-btn">Comment</button>
                    </form>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
=======
const LS_USER = 'ccUser';
const LS_POSTS = 'blogPosts';
const LS_COMMENTS = 'blogComments';
const LS_REQUESTS = 'pickupRequests';
const defaultUser = {
  name: 'QA Student',
  email: 'qa.student@example.com',
  avatar: 'https://i.pravatar.cc/100?img=12',
};

export default function Profile() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(LS_USER);
    return saved ? JSON.parse(saved) : defaultUser;
  });
  const [tab, setTab] = useState('posts');
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => {
    localStorage.setItem(LS_USER, JSON.stringify(user));
  }, [user]);

  const handleEdit = () => {
    setEdit(true);
    setForm(user);
  };
  const handleCancel = () => setEdit(false);
  const handleSave = () => {
    setUser(form);
    setEdit(false);
  };
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const getPosts = () => {
    const saved = localStorage.getItem(LS_POSTS);
    return saved ? JSON.parse(saved) : [];
  };
  const getComments = () => {
    const saved = localStorage.getItem(LS_COMMENTS);
    return saved ? JSON.parse(saved) : {};
  };

  const userPosts = getPosts().filter(
    p => (p.author && (p.author === user.name || p.author === user.email))
  );
  const allComments = getComments();
  const userComments = [];
  Object.entries(allComments).forEach(([postId, comments]) => {
    comments.forEach(c => {
      if (c.user === user.name || c.user === user.email) {
        userComments.push({ ...c, postId });
      }
    });
  });
  const postsById = Object.fromEntries(getPosts().map(p => [String(p.id), p]));

  function getRequests() {
    const saved = localStorage.getItem(LS_REQUESTS);
    return saved ? JSON.parse(saved) : [];
  }

  const userRequests = getRequests().filter(
    r => (r.name && (r.name === user.name || r.email === user.email))
  );

  // BADGES
  const badges = [];
  if (userPosts.length > 0) {
    badges.push({
      key: 'author',
      icon: '📝',
      label: 'Blog Author',
      desc: 'Created a blog post',
    });
  }
  if (userComments.length > 0) {
    badges.push({
      key: 'commenter',
      icon: '💬',
      label: 'Commenter',
      desc: 'Commented on a blog post',
    });
  }
  if (userRequests.length > 0) {
    badges.push({
      key: 'eco',
      icon: '🌱',
      label: 'Eco Starter',
      desc: 'Requested a waste pickup',
    });
  }
  // Streak: 3+ requests in any 7-day window
  const dates = userRequests.map(r => new Date(r.date)).sort((a,b)=>a-b);
  let streak = false;
  for (let i = 0; i < dates.length - 2; i++) {
    if ((dates[i+2] - dates[i])/(1000*60*60*24) <= 7) {
      streak = true;
      break;
    }
  }
  if (streak) {
    badges.push({
      key: 'streak',
      icon: '🔥',
      label: 'Streak',
      desc: '3+ pickups in 7 days',
    });
  }

  return (
    <div className="profile-root">
      <h1>My Profile</h1>
      <div className="profile-badges">
        {badges.length === 0 ? (
          <span className="profile-badge-none">No badges yet. Start participating!</span>
        ) : (
          badges.map(b => (
            <span className="profile-badge" key={b.key} title={b.desc}>
              <span className="profile-badge-icon">{b.icon}</span>
              <span className="profile-badge-label">{b.label}</span>
            </span>
          ))
        )}
      </div>
      <div className="profile-card">
        <img src={user.avatar} alt="avatar" className="profile-avatar" />
        {edit ? (
          <div className="profile-form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="avatar" value={form.avatar} onChange={handleChange} placeholder="Avatar URL" />
            <div className="profile-form-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={handleEdit}>Edit Profile</button>
          </>
        )}
      </div>
      <div className="profile-tabs">
        <button className={tab==='posts' ? 'active' : ''} onClick={()=>setTab('posts')}>My Blog Posts</button>
        <button className={tab==='comments' ? 'active' : ''} onClick={()=>setTab('comments')}>My Comments</button>
        <button className={tab==='requests' ? 'active' : ''} onClick={()=>setTab('requests')}>My Requests</button>
      </div>
      <div className="profile-tab-content">
        {tab==='posts' && (
          <div className="profile-tab-panel">
            {userPosts.length === 0 ? (
              <div>No blog posts yet.</div>
            ) : (
              <ul className="profile-list">
                {userPosts.map(post => (
                  <li key={post.id}>
                    <b>{post.title}</b> <span style={{color:'#43cea2'}}>{post.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {tab==='comments' && (
          <div className="profile-tab-panel">
            {userComments.length === 0 ? (
              <div>No comments yet.</div>
            ) : (
              <ul className="profile-list">
                {userComments.map(c => (
                  <li key={c.id}>
                    <span>On <b>{postsById[c.postId]?.title || 'Unknown Post'}</b>: </span>
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {tab==='requests' && (
          <div className="profile-tab-panel">
            {userRequests.length === 0 ? (
              <div>No waste pickup requests yet.</div>
            ) : (
              <ul className="profile-list">
                {userRequests.map((req, i) => (
                  <li key={req.id || i}>
                    <b>{req.date || 'No Date'}</b> - {req.location || 'No Location'}
                    <span style={{marginLeft:8, color:'#43cea2'}}>{req.status || 'Pending'}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
>>>>>>> 19ba0310232ecd04b9f3f95938eac31ac397f13d
      </div>
    </div>
  );
} 